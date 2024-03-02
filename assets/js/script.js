var consultFirstName;
var consultSurname;
var consultantEmail;
var travellerName;
var dateOfTravel;
var travelTypeRefund;
var refundTypeAir;
var refundDomOrIntRail;
var railRefundType;
var reasonForVoidAir;
var reasonForRefundAir;
var reasonForRefund;
var supplierAir;
var supplierAccom;
var supplierCarTaxi;
var supplierDomRail;
var supplierintRail;
var supplierAnc;
var flightNDC;
var bookingSystem;
var processedAutomatically;

var supplier;
var referrence
var airTicketNo;
var localCurrenyRefundAmount;
var refundDueToEA;
var refundBackToClient;
var refundMarkUp;
var anyThingElseToKnow;


document.getElementById('travelTypeRefund').addEventListener('change', function () {
    const refundTypeField = document.getElementById('refundTypeAir');
    const flightNdcQuestion = document.getElementById('flightNDC')
    const domOrIntRailField = document.getElementById('refundDomOrIntRail');
    const reasonForRefundField = document.getElementById('reasonForRefund');
    const supplierAccomField = document.getElementById('supplierAccom');
    const supplierCarTaxiField = document.getElementById('supplierCarTaxi');
    const supplierAncField = document.getElementById('supplierAnc');

    refundTypeField.innerHTML = '';
    flightNdcQuestion.innerHTML = '';
    domOrIntRailField.innerHTML = '';
    reasonForRefundField.innerHTML = '';
    supplierAccomField.innerHTML = '';
    supplierCarTaxiField.innerHTML = '';
    supplierAncField.innerHTML = '';

    if (this.value === 'Flight') {
        refundTypeField.innerHTML = `
        <div>
            <label class="form-group" for="flightRefundType">Select refund type for Flight:</label>
            <select class="form-control" id="flightRefundType" required>
                <option value="" selected disabled>Please Select</option>
                <option value="Void">Void</option>
                <option value="Full">Full</option>
                <option value="Partial">Partial</option>
                <option value="Tax only">Tax only</option>
            </select>
        </div>`;

        // Use setTimeout to ensure the DOM has updated
        setTimeout(() => {
            document.getElementById('flightRefundType').addEventListener('change', function () {
                const reasonForVoidAir = document.getElementById('reasonForVoidAir');
                const reasonForRefundAir = document.getElementById('reasonForRefundAir');

                reasonForVoidAir.innerHTML = ''; // Reset content
                reasonForRefundAir.innerHTML = ''; // Reset content

                if (this.value === 'Void') {
                    reasonForVoidAir.innerHTML = `
                        <div>
                            <label class="form-group" for="reasonForVoidAir">Reason for Void:</label>
                            <select class="form-control" id="reasonForVoidAir" required>
                                <option value="" selected disabled>Please Select</option>
                                <option value="Agent Error">Agent Error</option>
                                <option value="Client Error">Client Error</option>
                                <option value="Agent request – Higher profit booking">Agent request – Higher profit booking</option>
                            </select>
                        </div>`;
                } else {
                    reasonForRefundAir.innerHTML = `
                        <div>
                            <label class="form-group" for="reasonForRefundAir">Reason for Refund:</label>
                            <select class="form-control" id="reasonForRefundAir" required>
                                <option value="" selected disabled>Please Select</option>
                                <option value="Client's request - Change of plans">Client's request - Change of plans</option>
                                <option value="Agent Error">Agent Error</option>
                                <option value="Involuntary Change">Involuntary Change</option>
                                <option value="Official government travel advice">Official government travel advice</option>
                                <option value="Supplier issue">Supplier issue</option>
                            </select>
                        </div>`;
                }
            });
        }, 0);

        flightNdcQuestion.innerHTML = `
            <div class="form-group">
                <label for="flightNDCSelect">Is this an NDC flight?:</label>
                <select class="form-control" id="flightNDCSelect" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        `;

        // Correct the timing and target element ID for attaching the event listener
        setTimeout(() => {
            document.getElementById('flightNDCSelect').addEventListener('change', function () {
                const bookingSystemQuestion = document.getElementById('bookingSystem');
                const processedAutomaticallyQuestion = document.getElementById('processedAutomatically'); // Get the target div for the new question

                if (this.value === 'Yes') {
                    bookingSystemQuestion.innerHTML = `
                        <div class="form-group">
                            <label for="bookingSystemSelect">Was this booked in Atriis or Amadeus?:</label>
                            <select class="form-control" id="bookingSystemSelect" required>
                                <option value="" selected disabled>Please Select</option>
                                <option value="Atriis">Atriis</option>
                                <option value="Amadeus">Amadeus</option>
                            </select>
                        </div>
                    `;

                    // Wait for the booking system question to be answered before displaying the next question
                    document.getElementById('bookingSystemSelect').addEventListener('change', function () {
                        processedAutomaticallyQuestion.innerHTML = `
                            <div class="form-group">
                                <label for="processedAutomaticallySelect">Was the refund/void processed automatically?</label>
                                <select class="form-control" id="processedAutomaticallySelect" required>
                                    <option value="" selected disabled>Please Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        `;
                    });
                } else {
                    bookingSystemQuestion.innerHTML = ''; // Clear the content if 'No' is selected for NDC
                    processedAutomaticallyQuestion.innerHTML = ''; // Also clear this question since it's dependent on the NDC selection
                }
            });
        }, 0);



    } else if (this.value === 'Accommodation') {
        reasonForRefundField.innerHTML = `
            <div>
                <label class="form-group" for="reasonForRefund">Reason for Refund:</label>
                <select class="form-control" id="reasonForRefund" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Client's request - Change of plans">Client's request - Change of plans</option>
                    <option value="Agent Error">Agent Error</option>
                    <option value="Client Error">Client Error</option>
                    <option value="Official government travel advice">Official government travel advice</option>
                    <option value="Supplier issue">Supplier issue</option>
                </select>
            </div>`;

        supplierAccomField.innerHTML = `
        <div>
            <label class="form-group" for="supplierAccom">Select the Accommodation Supplier</label>
            <select class="form-control" id="supplierAccom" required>
                <option value="" selected disabled>Please Select</option>
                <option value="GDS Hotel">GDS Hotel</option>
                <option value="Expedia">Expedia</option>
                <option value="Booking.com">Booking.com</option>
                <option value="Hotel Direct">Hotel Direct</option>
            </select>
        </div>
        `
    } else if (this.value === 'Car Hire & Taxi') {
        reasonForRefundField.innerHTML = `
            <div>
                <label class="form-group" for="reasonForRefund">Reason for Refund:</label>
                <select class="form-control" id="reasonForRefund" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Client's request - Change of plans">Client's request - Change of plans</option>
                    <option value="Agent Error">Agent Error</option>
                    <option value="Client Error">Client Error</option>
                    <option value="Official government travel advice">Official government travel advice</option>
                    <option value="Supplier issue">Supplier issue</option>
                </select>
            </div>`;

        supplierCarTaxiField.innerHTML = `
        <div>
            <label class="form-group" for="supplierCarTaxi">Select the Accommodation Supplier</label>
            <select class="form-control" id="supplierCarTaxi" required>
                <option value="" selected disabled>Please Select</option>
                <option value="Avis">Avis</option>
                <option value="Enterprise">Enterprise</option>
                <option value="Europcar">Europcar</option>
                <option value="Hertz">Hertz</option>
                <option value="Sixt">Sixt</option>
                <option value="Blacklane">Blacklane</option>
                <option value="Transferz">Transferz</option>
                <option value="Jyrney">Jyrney</option>
                <option value="Other">Other</option>
            </select>
        </div>
        `
    } else if (this.value === 'Rail') {
        domOrIntRailField.innerHTML = `
        <div>
            <label class="form-group" for="railRefundType">Select if this is a Domestic or International Rail Refund:</label>
            <select class="form-control" id="railRefundType" required>
                <option value="" selected disabled>Please Select</option>
                <option value="Domestic Rail Refund">Domestic Rail Refund</option>
                <option value="International Rail Refund">International Rail Refund</option>
            </select>
        </div>
        `
    } else if (this.value === 'Ancillary') {
        reasonForRefundField.innerHTML = `
            <div>
                <label class="form-group" for="reasonForRefund">Reason for Refund:</label>
                <select class="form-control" id="reasonForRefund" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Client's request - Change of plans">Client's request - Change of plans</option>
                    <option value="Agent Error">Agent Error</option>
                    <option value="Client Error">Client Error</option>
                    <option value="Official government travel advice">Official government travel advice</option>
                    <option value="Supplier issue">Supplier issue</option>
                </select>
            </div>`;

        supplierAncField.innerHTML = `
        <div>
            <label class="form-group" for="ancillarySupplier">Name of Supplier:</label>
            <input class="form-control" type="text" id="ancillarySupplier" placeholder="Name of Supplier" required>
        </div>`;
    }


});
