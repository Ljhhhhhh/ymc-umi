/*
 * @Author: Jan-superman
 * @Date: 2018-10-09 15:37:17
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-24 23:26:50
 */

import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import Router from 'umi/router';
import PropTypes from 'prop-types';
import PngIcon from '../PngIcon';
import theme from '@/theme';

const tabBarData = [
  {
    link: "/home",
    icon: "home",
    selectedIcon: "home_selected",
    title: "首页"
  },
  {
    link: "/gift",
    icon: "gift",
    selectedIcon: "gift_selected",
    title: "福利"
  },
  {
    link: "/discount",
    icon: "discount",
    selectedIcon: "discount_selected",
    title: "发现"
  },
  {
    link: "/me",
    icon: "me",
    selectedIcon: "me_selected",
    title: "我的"
  },
];

class MenuBar extends PureComponent {
  render() {
    const { isMenubar, children, pathname } = this.props;
    return (
      <TabBar hidden={isMenubar} tintColor={theme.primaryColor}>
        {tabBarData.map(({ title, icon, selectedIcon, link }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<PngIcon icon={icon} width="40px" height="40px" />}
            selectedIcon={<PngIcon icon={selectedIcon} width="40px" height="40px" />}
            selected={pathname === link}
            onPress={() => Router.push(`${link}`)}
          >
            {/* 匹配到的children路由进行渲染 */}
            {children.props.location.pathname === link && children}
          </TabBar.Item>
        ))}
      </TabBar>
    );
  }
}

MenuBar.defaultProps = {
  isMenubar: false,
  children: null,
  pathname: '/home',
};

MenuBar.propTypes = {
  isMenubar: PropTypes.bool,
  children: PropTypes.node,
  pathname: PropTypes.string,
};

export default MenuBar;
