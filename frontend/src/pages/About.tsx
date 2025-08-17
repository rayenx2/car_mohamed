export default function About() {
    return (
        <div id="About" className="mx-auto w-[90vw] pb-[80px]
        lg:w-[1000px] lg:pb-[50px]">
            <h1 className="page-title pt-5">About Us</h1>
            <div className="mb-5">
                <h2 className="about__subtitle">History</h2>
                <p>
                    <span className="font-bold">ALFA MOTORS</span> is a family company specializing in the sale of luxury premium brand cars, with a tradition spanning almost thirty years.
                </p>
                <p>
                    It was born from a passion for motoring, where experience and knowledge about cars has been passed down from generation to generation.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="about__subtitle">Goal</h2>
                <p>
                    Our main principle is individual, honest and fair approach to each client, so they can consciously choose the best car for themselves.
                </p>
                <p>
                    Most of our clients, after a successful first transaction, return to us for another confident purchase and recommend our services further.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="about__subtitle">Business Foundation</h2>
                <p>
                    All cars are our property. The decision to purchase is always preceded by thorough vehicle inspection and meeting strict selection criteria.
                </p>
                <p className="font-bold">
                    We only buy specimens that have fully documented usage and service history, are accident-free and often have factory warranty.
                </p>
                <p className="font-bold">
                    Cars exclusively domestic, purchased in Polish authorized dealer showrooms.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="about__subtitle">Car Exchange - Comprehensive Approach</h2>
                <p>
                    We approach comprehensively the issue of car exchange by a potential client:
                </p>
                <ul className="list-disc pl-[25px] m-[3px]">
                    <li>we provide advice on choosing a brand and model that will meet your expectations</li>
                    <li>we search for vehicles on your order according to specific requirements</li>
                    <li>if you have a vehicle in very good condition, we can buy it back or take it in exchange for a car from our offer</li>
                    <li>we organize very favorable financing for companies, as well as for private individuals.</li>
                </ul>
            </div>
            
            <h3 className="font-bebasFont text-center text-3xl font-medium pt-2 pb-7 mx-auto my-0">We invite you to contact us through the form, by email or by phone!</h3>
        </div>
    );
}