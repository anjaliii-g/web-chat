import React, { useEffect, useState } from "react";
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Strapi ChatRoom</h1>
          <p className="py-6">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <button className="btn btn-primary">LOGIN WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
};
export default Login;