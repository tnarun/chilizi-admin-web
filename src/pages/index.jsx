import React from 'react'

import { 
  Admin, Resource,
  List, Datagrid, TextField, EditButton,
  Create, SimpleForm, TextInput, PasswordInput,
  Edit,

  Toolbar, SaveButton, Show, ShowButton, SimpleShowLayout,
  DateField,
} from 'react-admin'

import chineseMessages from 'ra-language-chinese'
import polyglotI18nProvider from 'ra-i18n-polyglot'

import jsonServerProvider from 'ra-data-json-server'
// const endpoint = 'http://localhost:8000/2016-08-15/proxy/chilizi-user-auth/provider/json'
const endpoint = 'https://1246105.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/chilizi-user-auth/provider/json'
const dataProvider = jsonServerProvider(endpoint)

const i18nProvider = polyglotI18nProvider(() => chineseMessages, 'cn')

export default class index extends React.Component {
  render () {
    return <Admin 
      i18nProvider={ i18nProvider }
      dataProvider={ dataProvider }
    >
      <Resource 
        name="users" 
        list={ UserList }
        create={ UserCreate }
        edit={ UserEdit }
        show={ UserShow }
      />
    </Admin>
  }
}

class UserList extends React.Component {
  render () {
    return <List { ...this.props }>
      <Datagrid>
        <TextField source="id" />
        <TextField source="login" />
        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />
        <TextField source="description" />

        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  }
}

class UserCreate extends React.Component {
  render () {
    return <Create { ...this.props }>
      <SimpleForm>
        <TextInput source="login" />
        <PasswordInput source="password" />
      </SimpleForm>
    </Create>
  }
}

class UserEditToolbar extends React.Component {
  render () {
    return <Toolbar { ...this.props } >
      <SaveButton 
        label='保存用户信息' 
      />
    </Toolbar>
  }
}

class UserEdit extends React.Component {
  render () {
    return <Edit undoable={ false } { ...this.props }>
      <SimpleForm toolbar={ <UserEditToolbar /> }>
        <TextInput disabled source="id" />
        <TextInput disabled source="login" />
        <TextInput multiline source="description" label='用户简介' />
      </SimpleForm>
    </Edit>
  }
}

class UserShow extends React.Component {
  render () {
    return <Show { ...this.props }>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="login" />
        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />
        <TextField source="description" />
      </SimpleShowLayout>
    </Show>
  }
}