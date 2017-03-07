import React from "react";
import classnames from 'classnames';

class TextFieldGroup extends React.Component {
  render() {
    let textFieldClassnames = classnames (
      'form-group',
      {'has-error' : this.props.error}
    )
    return (
	    <div className={textFieldClassnames}>
	      <label className="control-label">{this.props.label}</label>
	      <input
	          onChange={this.props.onChange}
	          value={this.props.value}
	          type={this.props.type}
	          name={this.props.name}
	          className="form-control"
	          placeholder={this.props.placeholder}>
	      </input>
	      {this.props.error && <span className="help-block">{this.props.error}</span>}
	    </div>
    );
  }
}

export default TextFieldGroup;