constructor(props) 
      {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = 
        {
          jsonURL: 'http://demo.morgenrot-wolf.de/qubidu/test.json',
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
      }

componentDidMount()
 {

  this.loadJSONData();

 }
loadJSONData() 
{

   fetch(this.state.jsonURL, {method: "GET"})
   .then((response) => response.json())
   .then((responseData) =>
   {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseData) });
  }).done(() => {});
}

render() {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={{color:'red',fontSize:50}}>{rowData.ab}</Text>}
          />
    </View>