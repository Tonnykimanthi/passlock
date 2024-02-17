
const AddItemForm = () => {
  return (
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
        </div>
        <div>
            <label htmlFor="user-name-email">Username/Email</label>
            <input type="text" name="user-name-email"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password"/>
        </div>
    </form>
  )
}

export default AddItemForm