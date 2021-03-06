import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from "antd";
import { SortableContainer, SortableElement, SortStart, SortEnd, SortEvent } from "react-sortable-hoc";
import classNames from "classnames";

import { addTabFromSlidMenu } from "../../../store/system/actions";
import { SliderMenuConfig } from "../../../typings";

import { AppState } from "../../../store";

import "./index.less";

const SortableItem = SortableElement((props: any) => {
  const { children } = props;
  return (
    <div
      className={classNames("draggable-tabs-bar-horizontal-item", props.className)}
      style={props.style}
    >
      {children}
    </div>
  );
});

const SortableContainerList = SortableContainer((props: any) => {
  const {
    className,
    dataSource,
    activeKey,
    itemClass,
    onClose,
    onClick,
    itemWrapper,
    isSorting,
    ...others
  } = props;

  return (
    <div
      className={classNames("draggable-tabs-bar-root", className, { sorting: isSorting })}
      {...others}
    >
      {dataSource.map((item: DraggableTabsBarProps, index: number) => {
        const { activeKey: currentActiveKey, name, closable } = item;
        const isActive = activeKey === currentActiveKey;
        let itemJsx: (React.ReactNode[] | JSX.Element) = [
          <div key="item" className="item-inner" onClick={e => onClick && onClick(item, e)}>
            {name}
          </div>,
          closable ? (
            <div key="close" className="close-wrapper" onClick={e => onClose && onClose(item, e)}>
              <Icon type="close" />
            </div>
          ) : null,
        ];

        if (itemWrapper) {
          itemJsx = itemWrapper(itemJsx, item, "draggable-tabs-bar-wrapper");
        } else {
          itemJsx = <div className="draggable-tabs-bar-wrapper">{itemJsx}</div>;
        }
        return (
          <SortableItem
            key={currentActiveKey}
            className={classNames(itemClass, { active: isActive })}
            index={index}
          >
            <div className="draggable-tabs-bar-horizontal-item-inner">{itemJsx}</div>
          </SortableItem>
        );
      })}
    </div>
  );
});

interface DraggableTabsBarProps {
  dataSource: SliderMenuConfig[];
  type?: string;
  activeKey?: string;
  name?: string;
  path?: string;
  currentTab?: string;
  closable?: boolean;
  onSortStart: (sort: SortStart, event: SortEvent) => void;
  onSortEnd: (sort: SortEnd, event: SortEvent) => void;
  onClose: (sort: any, event: any) => void;
  onClick: (item: SliderMenuConfig, event: any) => void;
  itemWrapper: (itemJsx: any, item: any, wrapperClassName: any) => void;
  addTabFromSlidMenu: (payload: SliderMenuConfig) => void;
}

interface DraggableTabsBarState {
  mouseIn?: any;
  isSorting?: boolean;
}

class DraggableTabsBar extends Component<DraggableTabsBarProps, DraggableTabsBarState> {
  private container: any;

  constructor(props: DraggableTabsBarProps) {
    super(props);

    this.state = {
      mouseIn: false,
      isSorting: false,
    };
  }

  menuItemClick = (payload: SliderMenuConfig) => {
    const parms: SliderMenuConfig = {
      ...payload,
    };
    addTabFromSlidMenu(parms);
  };

  setTabsWidth = () => {
    const { mouseIn } = this.state;
    const maxWidth = 150;
    const items = this.container.querySelectorAll(".draggable-tabs-bar-horizontal-item-inner");
    const rootContainer = this.container.querySelector(".draggable-tabs-bar-root");
    const itemCount = items.length;
    const rootContainerWidth = rootContainer.clientWidth;
    const maxCount = Math.floor(rootContainerWidth / maxWidth);

    if (!mouseIn) {
      if (itemCount <= maxCount) {
        // 宽度足够所有的tab使用最大宽度，都使用最大宽度
        items.forEach((itemNode: any) => {
          itemNode.style.width = `${maxWidth}px`;
        });
      } else {
        // 宽度不够使用最大宽度，平均分配
        items.forEach((itemNode: any) => {
          itemNode.style.width = `${rootContainerWidth / itemCount}px`;
        });
      }
    }
  };

  componentDidMount() {
    this.setTabsWidth();
  }

  componentDidUpdate(prevProps: any) {
    const { dataSource } = this.props;
    const { dataSource: prevDataSource } = prevProps;

    // tabs 个数有变，调整宽度
    if (prevDataSource.length !== dataSource.length) {
      this.setTabsWidth();
    }
  }

  onSortStart = (info: any, event: any) => {
    this.setState({ isSorting: true });

    const { onSortStart } = this.props;

    if (onSortStart) {
      onSortStart(info, event);
    }
  };

  onSortEnd = (info: any, event: any) => {
    this.setState({ isSorting: false });

    const { onSortEnd } = this.props;

    if (onSortEnd) {
      onSortEnd(info, event);
    }
  };

  handleMouseEnter = () => {
    this.setState({ mouseIn: true });
  };

  handleMouseLeave = () => {
    this.setState({ mouseIn: false }, this.setTabsWidth);
  };

  render() {
    const { dataSource, activeKey, onClose, onClick, itemWrapper } = this.props;
    const { isSorting } = this.state;
    const props = {
      isSorting,
      dataSource,
      activeKey,
      onSortEnd: this.onSortEnd,
      onSortStart: this.onSortStart,
      axis: "x",
      distance: 1,
      ref: "component",
      onClose,
      onClick,
      itemWrapper,
    };

    console.log("DraggableTabsBar :: dataSource", dataSource);
    return (
      <div
        style={{ width: "100%" }}
        ref={node => (this.container = node)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <SortableContainerList {...props} />
      </div>
    );
  }
}

const mapStateToProps = ({ system }: AppState) => {
  return {
    currentTab: system.currentTab,
  };
};
export default connect(mapStateToProps, { addTabFromSlidMenu })(DraggableTabsBar);
