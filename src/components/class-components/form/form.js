import {Component} from "react"


class ClassForm extends Component{
    render(){
        return(
            <>
            <h2>Form</h2>
      <form className="frm">
        <label>
          Enter Username:
          <input type="text" placeholder="Enter Username" />
        </label><br/>
        <label>
          Enter Password:
          <input type="password" placeholder="Enter Password" />
        </label><br/>
        <button type="submit">Sign in</button>
      </form>
            </>
        )
    }
}

export default ClassForm
