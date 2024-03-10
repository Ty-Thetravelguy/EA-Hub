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
                if (this.value === 'Yes') {
                    flightNDCSectionQuestionYes()
                } else {
                    flightNDCSectionQuestionNo()
                }
            });
        };

        function flightNDCSectionQuestionYes() {
            const bookingSystemSection = document.getElementById('bookingSystemSection');
            const processedAutomaticallySection = document.getElementById('processedAutomaticallySection');

            bookingSystemSection.innerHTML = '';
            processedAutomaticallySection.innerHTML = '';

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
            });
        };

        function flightNDCSectionQuestionNo() {
            const airSupplierSection = document.getElementById('airSupplierSection');

            airSupplierSection.innerHTML = '';

            airSupplierSection.innerHTML = `
            <div >
                <label class="form-group" for="airSupplier">Was the void or refund processed automatically or processed by the airline?</label>
                <select class="form-control" id="airSupplier" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="BSP">BSP - Issued in our office ID</option>
                    <option value="eGlobal">eGlobal</option>
                </select>
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

