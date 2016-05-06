import mori from 'mori';
import React, { Component } from 'react';
import * as styles from './DataTable.css';

export default class DataTable extends Component {
  drawHeader(selections) {
    return (
      <tr>{this.drawHeaderItems(selections)}</tr>
    );
  }

  drawHeaderItems(selections) {
    return selections.map((item, index) => (
      <th key={index}>{item}</th>
    ));
  }

  drawBody(data, selections) {
    return data.map((row, index) => (
      <tr key={index}>{this.drawBodyItems(row, selections)}</tr>
    ));
  }

  drawBodyItems(row, selections) {
    return selections.map((column, index) => (
      <td key={index}>{row[column]}</td>
    ));
  }

  render() {
    const headers = mori.intoArray(mori.keys(mori.first(this.props.data)));
    const data = mori.toJs(mori.filter(
      (row) => mori.every(
        (selection) => mori.equals(
          mori.first(mori.rest(selection)),
          mori.get(row, mori.first(selection))
        ),
        this.props.selections
      ),
      this.props.data
    ));
    return (
      <table className={styles.DataTable}>
        <thead>{this.drawHeader(headers)}</thead>
        <tbody>{this.drawBody(data, headers)}</tbody>
      </table>
    );
  }
}

DataTable.propTypes = {
  data: React.PropTypes.object,
  selections: React.PropTypes.object,
};
