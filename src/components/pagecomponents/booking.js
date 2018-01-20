import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  customWidth: {
    width: 150,
  },
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};
const colors = [
'Red',
'Orange',
'Yellow',
'Green',
'Blue',
'Purple',
'Black',
'White',
'trade'
];

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};


class Booking extends Component {

  componentDidMount(){
    document.title = "Booking";
  };
  state = {
    value: 1,
    check: false,
  };
  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <MuiThemeProvider>
      <div className="container-fluid">
        <div id="one">
          <SelectField
           floatingLabelText="Frequency"
           value={this.state.value}
           onChange={this.handleChange}
         >
           <MenuItem value={1} primaryText="Never" />
           <MenuItem value={2} primaryText="Every Night" />
           <MenuItem value={3} primaryText="Weeknights" />
           <MenuItem value={4} primaryText="Weekends" />
           <MenuItem value={5} primaryText="Weekly" />
         </SelectField>
         <div className="filtercontainer">
           <AutoComplete
            hintText="Hospital"
            dataSource={colors}
            menuProps={menuProps}
          />
      </div>
     </div>

     <div id="two">
       <SelectField
        floatingLabelText="Frequency"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </SelectField>
         <div className="filtercontainer">
           <AutoComplete
            hintText="Docter"
            dataSource={colors}
            menuProps={menuProps}
          />
     </div>
     </div>

     <div id="three">
       <SelectField
        floatingLabelText="Frequency"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </SelectField>
         <div className="filtercontainer">
           <AutoComplete
            hintText="Medicine"
            dataSource={colors}
            menuProps={menuProps}
          />
     </div>
     </div>
     <div id="pilihan">
         <DatePicker hintText="Date" container="inline" mode="landscape" />
     <div id="pilihanbg">
         <b>Tipe :</b>
      <div className="checkbox">
        <Checkbox
          label="Regular"
          style={styles.checkbox}
        />
      </div>
      <div className="checkbox">
        <Checkbox
          label="Supreme"
          style={styles.checkbox}
        />
      </div>
      <div className="checkbox">
        <Checkbox
          label="VIP"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
      </div>
         <a href="" style={{textDecoration: 'underline'}}>Informasi Tipe</a>
         </div>
         <div id="keterangan">
         <input type="text" className="form-control" id="usr" placeholder="Atas Nama" id="keteranganitem"/>
         <textarea className="form-control" placeholder="Keterangan" id="keteranganitem" name="information" cols="40" rows="5" id="keteranganitem"></textarea>
           <br/>
            <button type="button" className="btn btn-success" id="btnsearch" >Pesan</button>

         </div>
      <div id="result">
         </div>
     </div>
    <Link to="/emergency"><button type="button" className="btn btn-danger" id="emergencybutton">Emergency Button</button></Link>

      </div>
    </MuiThemeProvider>
    );
  }
}

export default Booking;
