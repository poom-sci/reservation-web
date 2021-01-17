import React, { Component } from "react";

import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import { updateObject, checkValidity } from "../../../shared/utility";
import emailjs from "emailjs-com";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      tel: {
        elementType: "input",
        elementConfig: {
          type: "tel",
          placeholder: "Your Tel",
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
          maxLength: 10,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      content: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Write your message here...",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    sending: false,
    success: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    this.setState({ sending: true });

    emailjs
      .send(
        "service_a7u53zs",
        "template_craquqg",
        formData,
        "user_NzrWNIe3V25f5WhBAfIVq"
      )
      .then((response) => {
        this.setState({ sending: false, success: true });
      })
      .catch((error) => {
        this.setState({ sending: false });
      });

    // axios
    //   .post("https://api.emailjs.com/api/v1.0/email/send", {
    //     type: 'POST',
    //     data: JSON.stringify(data),
    //     contentType: 'application/json'
    // })
    // .then((response) => {this.setState({ sending: false,success:true });})
    // .catch((error) => {this.setState({ sending: false });})
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.orderForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.orderForm[inputIdentifier].validation
        ),
        touched: true,
      }
    );
    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          SEND
        </Button>
      </form>
    );
    if (this.state.sending) {
      form = <Spinner />;
    }

    let success = null;
    if (this.state.success) {
      success = <p>SENDING SUCCESS</p>;
    }

    return (
      <div className={classes.ContactData}>
        <h4>CONTACT FORM</h4>
        {form}
        {success}
      </div>
    );
  }
}

export default withErrorHandler(ContactData, axios);
