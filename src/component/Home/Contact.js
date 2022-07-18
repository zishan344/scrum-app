import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary py-10 ">
      <div className="container mx-auto flex justify-between flex-wrap gap-5 items-center">
        <div>
          <h2 className="text-neutral font-bold">Email Us</h2>
          <h3 className="text-neutral">
            Connect with us in case of any queries, complaints or feedbacks...
          </h3>
        </div>
        <div>
          <button class="btn btn-wide btn-secondary">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
