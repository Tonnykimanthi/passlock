import { AppContext, Context } from "@/context/context";
import { useContext } from "react";

const AddItemForm = () => {
    const {setNameField} = useContext(AppContext) as Context

  return (
    <form className="space-y-3">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={e => setNameField(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="user-name-email">Username/Email</label>
        <input type="text" name="user-name-email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
      </div>
    </form>
  );
};

export default AddItemForm;
