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


document.getElementById('travelTypeRefund').addEventListener('change', function () {
    const airRefundTypeField = document.getElementById('airRefundTypeSection');

    airRefundTypeField.innerHTML = '';

    if (this.value === 'Flight') {
        airRefundTypeField.innerHTML = `
            <div>
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

            airReasonForVoidSection.innerHTML = ''; // Clear previous content
            airReasonForRefundSection.innerHTML = ''; // Clear previous content

            if (this.value === 'Void') {
                airReasonForVoidSection.innerHTML = `
                    <div>
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
                    <div>
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
            }
        });

        function flightNDCSectionQuestion() {
            console.log("flightNDCSectionQuestion called");
            document.getElementById('flightNDCSection').innerHTML = `
            <div >
                <label class="form-group" for="flightNDC">Is this an NDC flight?</label>
                <select class="form-control" id="flightNDC" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            `;

            document.getElementById('flightNDC').addEventListener('change', function () {
                const bookingSystemSection = document.getElementById('bookingSystemSection');
                const processedAutomaticallySection = document.getElementById('processedAutomaticallySection');
                const airSupplierSection = document.getElementById('airSupplierSection');

                bookingSystemSection.innerHTML = '';
                processedAutomaticallySection.innerHTML = '';
                airSupplierSection.innerHTML = '';

                if (this.value === 'Yes') {

                    flightNDCSectionQuestionYes()
                } else {
                    flightNDCSectionQuestionNo()
                }
            });
        };

        function flightNDCSectionQuestionYes() {
            bookingSystemSection.innerHTML = `
                <div >
                    <label class="form-group" for="bookingSystem">Was this booked in Amadeus or Atriis?</label>
                    <select class="form-control" id="bookingSystem" required>
                        <option value="" selected disabled>Please Select</option>
                        <option value="Amadeus">Amadeus</option>
                        <option value="Atriis">Atriis</option>
                    </select>
                </div>
                `;

            document.getElementById('bookingSystem').addEventListener('change', function () {
                processedAutomaticallySection.innerHTML = `
                    <div >
                        <label class="form-group" for="processedAutomatically">Was the void or refund processed automatically or processed by the airline?</label>
                        <select class="form-control" id="processedAutomatically" required>
                            <option value="" selected disabled>Please Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    `;

                document.getElementById('processedAutomatically').addEventListener('change', airRefundDataInput);
            });


        };

        function flightNDCSectionQuestionNo() {
            airSupplierSection.innerHTML = `
            <div>
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

            document.getElementById('airSupplier').addEventListener('change', airRefundDataInput);
        };


        function airRefundDataInput() {
            airRefundData.innerHTML = `
            <div id="airRefundDataDiv">
            <label class="form-group" for="airSupplierRef">Supplier Reference</label>
            <input class="form-control" type="text" id="airSupplierRef"
                placeholder="Supplier Reference." required>

            <label class="form-group" for="airTicketNo">Ticket number/s</label>
            <input class="form-control" type="text" id="airTicketNo"
                placeholder="Enter all the ticket number which require refunding." required>

            <label class="form-group" for="localCurrenyRefundAmount">Local currency refund
                amount:</label>
            <input class="form-control" type="text" id="localCurrenyRefundAmount"
                placeholder="Enter if known.">

            <label class="form-group" for="refundAmountGBP">Refund amount due to EA in GBP</label>
            <input class="form-control" type="text" id="refundAmountGBP"
                placeholder="Enter the amount we will be receving in GBP." required>

            <label class="form-group" for="refundBackToClient">Is the refund going back to the
                client?</label>
            <select class="form-control" id="refundBackToClient" required>
                <option value="" selected disabled>Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <label class="form-group" for="markUpBackToClient">Does your markup need to be refunded?</label>
            <select class="form-control" id="markUpBackToClient" required>
                <option value="" selected disabled>Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <label class="form-group" for="airNeedToKnow">Is there anything else we need to know?</label>
            <textarea class="form-control" name="airNeedToKnow" id="airNeedToKnow" cols="80" rows="10" placeholder="Waiver codes, details of the flight which has been cancelled by the airlines for which you need a refund, or the amount you want to keep but are still giving your client something back"></textarea>
        </div>
        <div>
            <input type="submit" value="Submit">
        </div>`;
        };



    } else if (this.value === 'Accommodation') {
        // Logic for Accommodation refunds
    } else if (this.value === 'Car hire & taxi') {
        // Logic for Car hire & taxi refunds
    } else if (this.value === 'Rail') {
        // Logic for Rail refunds
    } else if (this.value === 'Ancillary') {
        // Logic for Ancillary refunds
    }
});

