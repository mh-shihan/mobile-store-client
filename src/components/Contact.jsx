import { CommentBoxTextarea } from "../utilities/CommentBoxTextarea";
import TextBox from "../utilities/TextBox";

const Contact = () => {
  return (
    <div className="flex gap-4 shadow-lg p-4 mb-10">
      <div className="w-2/5">
        <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
        <p className="text-gray-600 text-sm mb-4">
          Have questions or ready to make your tech upgrade? Reach out to us at
          Mobile Store! Our dedicated team is here to assist you. Contact us for
          expert advice, personalized recommendations, and seamless service.
          Your satisfaction is our priority, and we are just a message away from
          enhancing your mobile experience.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Contact us for expert advice, personalized recommendations, and
          seamless service. Your satisfaction is our priority, and we are just a
          message away from enhancing your mobile experience.
        </p>
        <div className="text-gray-800">
          <p>The Company Name Inc.</p>
          <p>9870 St Vincent Place,</p>
        </div>
        <div className="text-sm text-gray-700">
          <p>Glasgow, DC 45 Fr 45.</p>
          <p>Telephone: +1 800 603 6035</p>
        </div>
        <p className="text-sm">
          <span>Email: </span>
          <a className="text-blue-600 hover:text-green-400 cursor-pointer">
            mail@mobilestore.com
          </a>
        </p>
      </div>

      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
        <div>
          <TextBox></TextBox>
        </div>

        <div>
          <CommentBoxTextarea></CommentBoxTextarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
