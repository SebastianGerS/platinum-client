import React, { Component } from 'react';
import QuestionTable from './Table';
import { Tab } from 'semantic-ui-react';
import BarChartResult from './BarChart';
import PieChartResult from './PieChart';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class Question extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Pie',
        render: () =>
          (
            <Tab.Pane>
              <PieChartResult options={this.props.question.options} />
            </Tab.Pane>
          ),
      },
      {
        menuItem: 'Bar',
        render: () =>
          (
            <Tab.Pane>
              <BarChartResult options={this.props.question.options} />
            </Tab.Pane>
          ),
      },
      {
        menuItem: 'Table',
        render: () =>
          (
            <Tab.Pane>
              <QuestionTable options={this.props.question.options} />
            </Tab.Pane>
          ),
      },
    ];

    return (
      <div className="min-width-100">
        <h3 className="margin-b-2"> {this.props.question.name} </h3>
        <Tab panes={panes} />
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
