import React, { Component } from "react";
import { View, ListView, Text,DeviceEventEmitter } from "react-native";
import {
  Container,
  Header,
  Fab,
  Icon,
  List,
  Content,
  Button,
  ListItem
} from "native-base";
import { home } from "../../styles/screenStyles";

import { store } from "../../store/store";

import ItemListViewCus from "../components/ItemListViewCus";
import SpinnerCus from "../components/SpinnerCus";

import APIs from "../../api/apiCentral";
const apis = new APIs();
class Home extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isActiveFab: "true",
      listViewData: store.list,
      txtEmpty: "No note",
      spinnerVisible: false,
      txtEdit : 'Edit',
      txtDel : 'Del'
    };
  }

  componentWillMount = async () => {
    this.fletchData();
    DeviceEventEmitter.addListener('update list', (e)=>{
      this.fletchData();
      console.log("back from note page" + e);
    })

  };
  
  fletchData = async () => {
    // Enable spinner
    this.setState({
      spinnerVisible: true
    });
    let list = await apis.getAllNote();
    this.setState({
      listViewData: list.data,
      spinnerVisible: false
    });

    console.log("data fletch");

  };

  deleteRow = async (id, secId, rowId, rowMap) => {
    // Delete on list view state
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
    alert("Deleted");
    // Delete on database
    await apis.deleteNote(id);
  };

  update = data => {

    this.props.navigation.navigate('Note',{
      id : data.id,
      title : data.title,
      desc : data.desc
    })

    console.log(data.id);
    console.log(data.title);
    console.log(data.desc);
  };
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.state.listViewData == null) {
      return (
        <Container>
          <Header />
          <View style={home.container}>
            <SpinnerCus visible={this.state.spinnerVisible} />
            {/* List to show note list */}
            <View style={home.viewTxtEmpty}>
              <Text style={home.txtEmpty}>{this.state.txtEmpty}</Text>
            </View>
            {/* Float button to add new note */}
            <Fab
              active={this.state.isActiveFab}
              style={home.fabContainer}
              position="bottomRight"
              onPress={() => this.onPressFloatButton()}
            >
              {/* Icon add  */}
              <Icon style={home.fabIcon} name="add" />
            </Fab>
          </View>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header />
          <View style={home.container}>
            {/* Custom Modal popup */}
            {/* Custom spinner */}
            <SpinnerCus visible={this.state.spinnerVisible} />
            {/* List to show note list */}
            <List
              leftOpenValue={75}
              rightOpenValue={-75}
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data => (
                <ItemListViewCus title={data.title} desc={data.desc} />
              )}
              renderLeftHiddenRow={data => (
                <Button full onPress={() => this.update(data)}>
                  <Text>{this.state.txtEdit}</Text>
                </Button>
              )}
              renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                <Button
                  full
                  danger
                  onPress={_ => this.deleteRow(data.id, secId, rowId, rowMap)}
                >
                  <Text>{this.state.txtDel}</Text>
                </Button>
              )}
            />
            {/* Float button to add new note */}
            <Fab
              active={this.state.isActiveFab}
              style={home.fabContainer}
              position="bottomRight"
              onPress={() => this.onPressFloatButton()}
            >
              {/* Icon add  */}
              <Icon style={home.fabIcon} name="add" />
            </Fab>
          </View>
        </Container>
      );
    }
  }

  onPressFloatButton = () => {
    // Do move to add new note
    this.props.navigation.navigate("Note");
  };
}

export default Home;
