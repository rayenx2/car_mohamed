import coins from '../assets/financing/coins.webp';

export default function Financing() {
    return (
        <div id='Financing' className="w-[90vw] mx-auto pb-[80px] 
        lg:w-[800px] lg:pb-12">
            <h1 className="page-title py-5">
                FINANCING
            </h1>
            <div className="box-border w-full items-center p-5 pt-0 flex flex-col-reverse 
            lg:flex-row">
                <img src={coins} alt='Help in obtaining car leasing' className="w-4/5 lg:w-[400px]"/>
                <ul className="w-4/5 list-disc pl-8 lg:w-[400px]">
                    <li className="financing__options">
                        We are able to organize all forms of financing on very favorable terms.
                    </li>
                    <li className="financing__options">
                        Financial products for companies and private individuals (operational leasing, financial leasing, leasing loan or credit).
                    </li>
                    <li className="financing__options">
                        We cooperate with the largest banks and leasing companies, which guarantees a wide choice of offers and comprehensive assistance.
                    </li>
                </ul>
            </div>
        </div>
    )
}
