 import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IoClose, IoPrint } from "react-icons/io5";





const HelpPage = () => {
    const onClose = () => {
        window.close();
    };


    const onPrint = () => {
        window.print();
    };

    function Footer() {
        return (
            <footer  style={{
                padding: '5px',
                backgroundColor: '#212529',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'IBM Plex Sans, sans-serif',
                marginTop: 'auto',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                color: 'white',
                fontSize:'14px'
            }}>
                Do not input personal data, or data that is sensitive or confidential into demo app. This app is built using the watsonx.ai SDK and may include systems and methods pending patent with the USPTO, protected under US Patent Laws. © Copyright IBM Corporation
            </footer>
        );
    }

    return (
        <div style={{fontFamily: 'IBM Plex Sans, sans-serif'}}>
            <div>
                <header style={{ backgroundColor: '#212529', height: '3rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ marginLeft: '1%', fontSize: '14px', color: 'white', fontWeight: 'bold', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    <p style={{ margin: 0 }}>  Smart Procurement Advisor</p>
                </div>
                    <div>
                        <IoClose style={{ color: 'white', cursor: 'pointer', fontSize: '20px', marginRight:'40px' }} onClick={onClose} />
                    </div>
                </header>
                <div >
                    <h2 style={{ textAlign: 'center' }}>Help Steps for Procurement</h2>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <div style={{ textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px', padding: '10px' }}>
                        <p>Let's assume you are locked in an SAP system - the page shows your order system and a chatbot. The order system is about your last orders or to order items from the catalog.
                            Because of that you are locked in, the SAP system as well as the chatbot knows you and can pre-set some parameters like plant, cost center etc.</p>
                    </div>
                    <div id="printIcon" style={{ textAlign: 'right', marginRight: '20%' }}>
                        <IoPrint style={{ color: '#0e62fe', cursor: 'pointer', fontSize: '40px' }} onClick={onPrint} />
                    </div>
                </div>

                <div id='helpContent' style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h3> Smart Procurement Advisor Application UI &  watsonX Assistant :</h3>
                    <div style={{ border: '1px solid #ccc', borderRadius: '8px', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px', padding: '10px' }}>
                        <p>1. Begin by selecting "All Orders" to access a master-detail view displaying all procurement orders.</p>
                        <p>2. Navigate to the watsonx card to view a master-detail layout specifically for procurement orders made through watsonx Assistant.</p>
                        <p>3. Explore category and recent order cards on the user interface.</p>
                        <p>4. For specific items like a "charger," utilize the search function to view the catalog.</p>
                        <p>5. Easily return to the home page by clicking the "Home" icon button.</p>
                        <p>6. If searching for a unique item like "Pump for heavy liquids," the system will open the product page if the pump is available in the catalog. In the absence of the item, a dialog box will appear, stating: "No Catalog Item Found - Please initiate a Purchase Requisition via WatsonX Chatbot."</p>
                        <p>7. Click the "Go to WatsonX Assistant" button to seamlessly transition to WatsonX Assistant and proceed with placing a procurement order.</p>
                        <p>8. Start the process by clicking on "Purchase Requisition" in the chatbot interface.</p>
                        <p>9. Choose any plants, be it "Plant1, Plant2 or Plant3" from the provided list of plants for your order.</p>
                        <p>10. Describe the item you want to order, ask, "pump for heavy liquids"</p>
                        <p>11. A list of material groups is presented, allowing the user to choose the appropriate group based on the specific parameters(Earthing current, Motor speed) required.</p>
                        <p>12. The Positive Displacement Pump is identified as meeting the criteria for the required parameters.</p>
                        <p>13. Once the right pump is selected, proceed by clicking "Go Next" from the drop down menu.</p>
                        <p>14. The specific information is retrieved from pump manuals in Watson Discovery and the answer is generated using a watsonx.ai model.</p>
                        <p>15. Now you can explore the supplier options and query with some suggested questions.</p>
                        <p>16. Ask the chatbot about the last preferred supplier with the query, "Who was the last preferred supplier?"</p>
                        <p>17. Obtain the delivery timeline difference for suppliers by asking, "What is the delivery timeline for supplier GEA?"</p>
                        <p>18. Obtain the cost difference of these suppliers by asking “show cost difference for these suppliers."</p>
                        <p>19. These queries are also based on supplier related documents retrieved from Watson Discovery and answer generation using a watsonx.ai model.</p>
                        <p>20. Now confirm your preferred supplier by pressing "yes."</p>
                        <p>21. Enter "GEA" as your preferred supplier.</p>
                        <p>22. Finalise your order by entering the necessary details.</p>
                        <p>23. Specify the quantity to order, for example, "100".</p>
                        <p>24. Set the unit of measure as "PC".</p>
                        <p>25. Select the account assignment as “cost center” to book the cost</p>
                        <p>26. Select the "cost center linked to the user" as cost center for booking the cost.</p>
                        <p>27. Provide Delivery Information by specifying the loading point for delivery, such as "Walldorf".</p>
                        <p>28. The Procurement Advisor will furnish a comprehensive summary of the purchase order, encompassing all pertinent details provided by the user.</p>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/HelpPage" element={<HelpPage />} />
            </Routes>
            <Footer />
        </div>
    );
};



export default HelpPage; 





