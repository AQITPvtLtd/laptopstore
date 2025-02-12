import React from 'react';
import Detailed from './Detailed';

const Page = async ({ params }) => {  // ✅ Make it async
    const { id } = await params;  // ✅ Destructure correctly
    console.log(id);
    
    return (
        <div className="pt-20">
            <Detailed id={id} />
        </div>
    );
};

export default Page;
