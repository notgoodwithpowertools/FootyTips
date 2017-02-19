var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import * as actions from '../../src/actions/actions.jsx';

//Compnonents
//var {Todo} = require('../../src/components/Todo.jsx');
import {Todo} from '../../src/components/Todo.jsx';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();

  });

// refactor for redux
//  it('should call onToggle prop with id on click', () => {
  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed)

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    //expect(spy).toHaveBeenCalledWith(199);
    expect(spy).toHaveBeenCalledWith(action);
  });

});