var consultFirstName;
var consultSurname;
var consultantEmail;
var travellerName;
var dateOfTravel;
var travelTypeRefund;
var airRefundType;
var airReasonForVoid;
var airReasonForRefund;
var flightNDC;
var flightNDCSection;
var bookingSystem;
var processedAutomatically;
var airSupplier;
var airSupplierRef;
var airTicketNo;
var localCurrenyRefundAmount;
var refundAmountGBP;
var refundBackToClient;
var markUpBackToClient;
var airNeedToKnow;

document.addEventListener('DOMContentLoaded', function () {
    refundApplication();
})


function refundApplication() {
    document.getElementById('travelTypeRefund').addEventListener('change', function () {
        if (this.value === 'Flight') {
            airRefund();
        } else if (this.value === 'Accommodation') {
            accommodationRefund();
        } else if (this.value === 'Car hire & Taxi') {
            carHireAndTaxiRefund();
        } else if (this.value === 'Rail') {
            railRefund();
        } else if (this.value === 'Ancillary') {
            ancillaryRefund();
        }
    });

    const airRefund = () => {

        const airRefundField = document.getElementById('airRefundTypeSection');

        airRefundField.innerHTML = `
            <div class="pt-2">
                <label class="form-group" for="airRefundType">Select refund type for Flight:</label>
                    <select class="form-control" id="airRefundType" required>
                        <option value="" selected disabled>Please Select</option>
                        <option value="Void">Void</option>
                        <option value="Full">Full</option>
                        <option value="Partial">Partial</option>
                        <option value="Tax only">Tax only</option>
                    </select>
            </div>
            `;

        document.getElementById('airRefundType').addEventListener('change', function () {
            const airReasonForVoidSection = document.getElementById('airReasonForVoidSection');
            const airReasonForRefundSection = document.getElementById('airReasonForRefundSection');

            airReasonForVoidSection.innerHTML = '';
            airReasonForRefundSection.innerHTML = '';

            if (this.value === 'Void') {
                airReasonForVoidSection.innerHTML = `
                        <div class="pt-2">
                            <label class="form-group" for="airReasonForVoid">Reason for Void:</label>
                            <select class="form-control" id="airReasonForVoid" required>
                                <option value="" selected disabled>Please Select</option>
                                <option value="Agent Error">Agent Error</option>
                                <option value="Client Error">Client Error</option>
                                <option value="Agent request – Higher profit booking">Agent request – Higher profit booking</option>    
                            </select>
                        </div>
                    `;
                document.getElementById('airReasonForVoid').addEventListener('change', flightNDCSectionQuestion);

            } else {
                airReasonForRefundSection.innerHTML = `
                        <div class="pt-2">
                            <label class="form-group" for="airReasonForRefund">Reason for Refund:</label>
                                <select class="form-control" id="airReasonForRefund" required>
                                    <option value="" selected disabled>Please Select</option>
                                    <option value="Client's request - Change of plans">Client's request - Change of plans</option>
                                    <option value="Agent Error">Agent Error</option>
                                    <option value="Involuntary Change">Involuntary Change</option>
                                    <option value="Official government travel advice">Official government travel advice</option>
                                    <option value="Supplier issue">Supplier issue</option>
                                </select>
                        </div>
                    `;
                document.getElementById('airReasonForRefund').addEventListener('change', flightNDCSectionQuestion);
            };
        });

        const flightNDCSectionQuestion = () => {
            document.getElementById('flightNDCSection').innerHTML = `
            <div class="pt-2">
                <label class="form-group" for="flightNDC">Is this an NDC flight?</label>
                <select class="form-control" id="flightNDC" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            `;

            document.getElementById('flightNDC').addEventListener('change', function () {
                const processedAutomaticallySection = document.getElementById('processedAutomaticallySection');
                processedAutomaticallySection.innerHTML = "";
                if (this.value === "Yes") {
                    processedAutomaticallySection.innerHTML = `
                    <div class="pt-2">
                        <label class="form-group" for="processedAutomatically">Was the void or refund processed automatically or processed by the airline?</label>
                        <select class="form-control" id="processedAutomatically" required>
                            <option value="" selected disabled>Please Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    `;

                    document.getElementById('processedAutomatically').addEventListener('change', function () {
                        const bookingSystemSection = document.getElementById('bookingSystemSection');
                        bookingSystemSection.innerHTML = "";
                        if (this.value === "No") {
                            bookingSystemSection.innerHTML = `
                            <div class="pt-2">
                                <label class="form-group" for="bookingSystem">Was this booked in Amadeus or Atriis?</label>
                                <select class="form-control" id="bookingSystem" required>
                                    <option value="" selected disabled>Please Select</option>
                                    <option value="Amadeus">Amadeus</option>
                                    <option value="Atriis">Atriis</option>
                                </select>
                            </div>`;

                            document.getElementById('bookingSystem').addEventListener('change', function () {
                                ndcRef();
                            })
                        } else {
                            ndcRef();
                        };
                    });

                } else {
                    nonNdcSuppliers();
                }
            });
        };

        function ndcRef() {
            const ndcRefSection = document.getElementById('ndcSupplierRefSection');
            ndcRefSection.innerHTML = `
            <div class="pt-2">
                <label class="form-group" for="ndcSupplierReference">Supplier Reference</label>
                <input class="form-control" type="text" id="ndcSupplierReference"
                    placeholder="Airline reference, else if Atriis, Supplier PNR" required>
            </div>`;
            airRefundDataInput();
        };

        function nonNdcSuppliers() {
            airSupplierSection.innerHTML = `
            <div class="pt-2">
                <label class="form-group" for="airSupplier">Select the supplier:</label>
                <select class="form-control" id="airSupplier" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="BSP">BSP - Issued in our office ID</option>
                    <option value="eGlobal">eGlobal</option>
                    <option value="Mainstreet">Mainstreet</option>
                    <option value="Brightsun">Brightsun</option>
                    <option value="Fare Mine">Fare Mine</option>
                    <option value="Travelfusion">Travelfusion</option>
                    <option value="Airlines website">Airlines website</option>
                </select>
            </div>`;

            document.getElementById('airSupplier').addEventListener('change', function () {
                const selectValue = this.value;
                const selectedOptionText = this.options[this.selectedIndex].text;

                let placeholderText = "";
                if (selectValue === "BSP") {
                    placeholderText = "Amadeus PNR Reference"
                } else if (selectValue === "Airlines website") {
                    placeholderText = "Airlines Reference"
                } else if (selectValue === "eGlobal") {
                    placeholderText = "eGlobals Supplier PNR"
                } else if (selectValue === "Fare Mine") {
                    placeholderText = "Amadeus PNR or Fare Mine portal reference"
                } else {
                    placeholderText = `${selectedOptionText} reference`;
                };

                const airSupplierInput = document.getElementById('airSupplierRef');
                airSupplierInput.innerHTML = `
                <div class="pt-2">
                    <label class="form-group input-wrapper" for="airSupplerRef">Supplier Reference</label>
                    <input class="form-control" type="text" id="airSupplerRef" placeholder="${placeholderText}" required>
                </div>`;

                airRefundDataInput();

                // Determine whether to show or hide the Ticket Number input section
                const ticketNumberSection = document.getElementById('ticketNumberSection'); // Ensure you have this ID on your Ticket Number section
                if (selectValue === "Travelfusion") {
                    ticketNumberSection.style.display = "none"; // Hide Ticket Number section
                } else {
                    ticketNumberSection.style.display = "block"; // Show Ticket Number section
                };
            });
        };

        function airRefundDataInput() {
            airRefundData.innerHTML = `
            
            <div id="ticketNumberSection" class="pt-2">
                <label class="form-group" for="airTicketNo">Enter the ticket number</label>
                <input class="form-control" type="text" id="airTicketNo"
                    placeholder="EG. 125-1234567890" required>
            </div>
            <div class="pt-2">
                <label class="form-group" for="localCurrenyRefundAmount">Local currency refund amount if applicable:</label>
                <input class="form-control" type="text" id="localCurrenyRefundAmount"
                    placeholder="Enter if known.">
            </div>
            <div class="pt-2">
                <label class="form-group" for="refundAmountGBP">Refund amount due to EA in GBP</label>
                <input class="form-control" type="text" id="refundAmountGBP"
                    placeholder="Enter the amount we will be receving in GBP." required>
            </div>
            <div class="pt-3">
                <label class="form-group">Is the refund going back to the client?</label>
                <div>
                    <input type="radio" id="refundBackToClientYes" name="refundBackToClient" value="Yes" required>
                    <label for="refundBackToClientYes">Yes</label>
                    <input type="radio" id="refundBackToClientNo" name="refundBackToClient" value="No" required>
                    <label for="refundBackToClientNo">No</label>
                </div>
            </div>
            <div class="pt-2">
                <label class="form-group">Does your markup need to be refunded?</label>
                <div>
                    <input type="radio" id="markUpBackToClientYes" name="markUpBackToClient" value="Yes" required>
                    <label for="markUpBackToClientYes">Yes</label>
                    <input type="radio" id="markUpBackToClientNo" name="markUpBackToClient" value="No" required>
                    <label for="markUpBackToClientNo">No</label>
                </div>
            </div>
            <div class="pt-3">
                <label class="form-group" for="airNeedToKnow">Is there anything else we need to know?</label>
                <textarea class="form-control" name="airNeedToKnow" id="airNeedToKnow" cols="80" rows="10" placeholder="Waiver codes, details of the flight which has been cancelled by the airlines for which you need a refund, or the amount you want to keep but are still giving your client something back"></textarea>
            </div>
            <div class="row justify-content-between pt-2">
                <div class="col-2">
                    <input type="submit" class="btn btn-success btn-lg" value="Submit">
                </div>
                <div class="col-2">
                    <input type="reset" id="resetButton" class="btn btn-danger btn-lg" value="Reset">
                </div>
            </div>`;
            document.getElementById('resetButton').addEventListener('click', function () {
                // Reloads the current page
                window.location.reload();
            });

        };

    };

    const accommodationRefund = () => {

    };

    const carHireAndTaxiRefund = () => {
    };

    const railRefund = () => {
    };

    const ancillaryRefund = () => {
    };

};

// document.addEventListener('DOMContentLoaded', () => {
//     let refundBackToClient = null;
//     let markUpBackToClient = null;

//     // Listener for refund back to client selection
//     document.querySelectorAll('input[name="refundBackToClient"]').forEach((elem) => {
//         elem.addEventListener('change', function () {
//             refundBackToClient = this.value;
//             console.log('Refund back to client:', refundBackToClient); // For debugging
//         });
//     });

//     // Listener for markup back to client selection
//     document.querySelectorAll('input[name="markUpBackToClient"]').forEach((elem) => {
//         elem.addEventListener('change', function () {
//             markUpBackToClient = this.value;
//             console.log('Markup back to client:', markUpBackToClient); // For debugging
//         });
//     });
// });



