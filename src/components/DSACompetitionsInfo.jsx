import React from 'react';
import Button from "./Button";

const DSACompetitionsInfo = () => {
    return (
        <div id="dsa-competitions-info" className="text-center">
            {/* Your DSA competitions information */}
            <h1 className="text-3xl font-bold mb-4">DSA Competitions</h1>
            <p className="text-base text-gray-400 mb-4">
                Join our ongoing competition, <span className="font-bold">ByteBattle</span>, and test your skills in solving challenging algorithmic problems.
            </p>
            <p className="text-base text-gray-400 mb-4">
                Participants will compete for exciting prizes:
            </p>
            <ul className="text-base text-gray-400 mb-4">
                <li>1st Place: ₹2,000 cash prize</li>
                <li>2nd Place: ₹1,000 cash prize</li>
                <li>3rd Place: ₹500 cash prize</li>
            </ul>
            <p className="text-base text-gray-400 mb-6">
                Registration is now open! Don't miss your chance to showcase your skills and win prizes.
            </p>
            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20 opacity-70">
                <Button href="https://docs.google.com/forms/d/e/1FAIpQLSf6ZnxoCY-vc0r9y7GltZonEKZSJvW_muftVc_EG_mk8XgOeg/viewform">Register Now</Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
                Hurry, limited slots available!
            </p>
        </div>
    );
};

export default DSACompetitionsInfo;
