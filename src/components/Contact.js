const Contact=()=>{
  return(
    <div>
      <h1>
        This is the contact page which contains contact details..
      </h1>
      <form>
        <input type="text" placeholder="name" className="p-2 m-2 border border-black"/>
        <input type="email" placeholder="email" className="p-2 m-2 border border-black"/>
        <input type="text" placeholder="message" className="p-2 m-2 border border-black"/>
        <button type="submit" className="p-2 m-2 bg-blue-500 text-white rounded-lg">Submit</button>
      </form>
    </div>
  );
};
export default Contact;