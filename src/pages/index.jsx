import React from 'react'
import css from './index.scss'

import CssBaseline from '@material-ui/core/CssBaseline'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import PersonIcon from '@material-ui/icons/Person'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'

import Markdown from 'markdown-to-jsx'

const md = `
  这里是用户管理页面，在这里可以进行以下操作：

  - 列出所有用户
  - 增加新用户
  - 修改用户信息
  - 根据 authToken 查询用户
`

export default class index extends React.Component {
  render () {
    return <div className={ css.index }>
      <CssBaseline />
      <TopBar />
      <SideBar />

      <main className={ css.main }>
        <Markdown>
          { md }
        </Markdown>
      </main>
    </div>
  }
}

class TopBar extends React.Component {
  render () {
    return <AppBar position="fixed" className={ css.appBar }>
      <Toolbar variant='dense'>
        <Typography variant="h6" noWrap>
          用户管理
        </Typography>
      </Toolbar>
    </AppBar>
  }
}

class SideBar extends React.Component {
  render () {
    return <Drawer 
      className={ css.drawer } 
      classes={{
        paper: css.drawerPaper,
      }}
      variant='permanent'>
      <div className={ css.pad } />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary='用户管理' />
        </ListItem>

        <List>
          <ListItem button className={ css.nested }>
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <ListItemText primary='待定' />
          </ListItem>
        </List>
      </List>
    </Drawer>
  }
}