import React from 'react'
// import css from './index.scss'

import { 
  Admin, Resource,
  List, Datagrid, TextField, EditButton,
  Create, SimpleForm, ReferenceInput, SelectInput, TextInput, LongTextInput,
  Edit
} from 'react-admin'

import chineseMessages from 'ra-language-chinese'
import polyglotI18nProvider from 'ra-i18n-polyglot'

import fakeDataProvider from 'ra-data-fakerest'

const dataProvider = fakeDataProvider({
  users: [
    { id: 0, title: 'Hello, world!', time: new Date('2020-02-02') },
    { id: 1, title: 'FooBar' },
  ]
}, true)

const i18nProvider = polyglotI18nProvider(() => chineseMessages, 'cn')

export default class index extends React.Component {
  render () {
    return <Admin 
      i18nProvider={ i18nProvider }
      dataProvider={ dataProvider }
    >
      <Resource 
        name="users" 
        list={ PostList }
        create={ PostCreate }
        edit={ PostEdit }
      />
    </Admin>
  }
}

class PostList extends React.Component {
  render () {
    return <List { ...this.props }>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="time" />
        <EditButton />
      </Datagrid>
    </List>
  }
}

class PostCreate extends React.Component {
  render () {
    return <Create { ...this.props }>
      <SimpleForm>
        {/* <ReferenceInput label="User" source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput> */}
        <TextInput source="title" />
        {/* <LongTextInput source="body" /> */}
      </SimpleForm>
    </Create>
  }
}

class PostTitle extends React.Component {
  render () {
    let { record } = this.props
    return <span>Post { record ? `"${record.title}"` : "" }</span>
  }
}

class PostEdit extends React.Component {
  render () {
    return <Edit { ...this.props }>
      <SimpleForm>
        <TextInput disabled source="id" />
        {/* <ReferenceInput label="User" source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput> */}
        <TextInput source="title" />
        {/* <LongTextInput source="body" /> */}
      </SimpleForm>
    </Edit>
  }
}