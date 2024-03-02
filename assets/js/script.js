var consultantFirstName;
var consultantSurname;
var consultantEmail;
var travellerName;
var travelTypeRefund;
var dateOfTravel;
var refundType;
var reasonForVoidAir;
var reasonForRefundAir;
var reasonForRefund;
var flightNDC;
var bookedThrough;
var supplier;
var referrence
var airTicketNo;
var localCurrenyRefundAmount;
var refundDueToEA;
var refundBackToClient;
var refundMarkUp;
var anyThingElseToKnow;


document.getElementById('travelTypeRefund').addEventListener('change', function () {
    const refundTypeFields = document.getElementById('refundType'); // For 'Flight' specific fields
    const domOrIntRail = document.getElementById('domOrIntRail'); // For 'Rail' specific fields
    const supplierFields = document.getElementById('supplier'); // For all other types
    refundTypeFields.innerHTML = ''; // Clear previous 'Flight' content
    domOrIntRail.innerHTML = ''; // Clear previous 'Rail' content
    supplierFields.innerHTML = ''; // Clear previous 'Supplier' content

    if (this.value === 'Flight') {
        const htmlContent = `
            <div>
                <label for="flightRefundType">Select refund type for Flight:</label>
                <select id="flightRefundType" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Void">Void</option>
                    <option value="Full">Full</option>
                    <option value="Partial">Partial</option>
                    <option value="Tax only">Tax only</option>
                </select>
            </div>
        `;
        refundTypeFields.innerHTML = htmlContent; // Insert into 'Flight' specific container
    } else if (this.value === 'Rail') {
        const htmlContent = `
            <div>
                <label for="railRefundType">Select if this is a Domestic or International Rail Refund:</label>
                <select id="railRefundType" required>
                    <option value="" selected disabled>Please Select</option>
                    <option value="Domestic Rail Refund">Domestic Rail Refund</option>
                    <option value="International Rail Refund">International Rail Refund</option>
                </select>
            </div>`;
        domOrIntRail.innerHTML = htmlContent; // Insert into 'Rail' specific container
    } else {
        let htmlContent = `<div><label for="${this.value}Supplier">Select the Supplier:</label>`;
        // Begin supplier-specific select or input
        htmlContent += `<select id="${this.value}SupplierSelect" required>
                            <option value="" selected disabled>Please Select</option>`;
        // Populate options dynamically based on selection
        switch (this.value) {
            case 'Accommodation':
                htmlContent += `
                    <option value="GDS Hotel">GDS Hotel</option>
                    <option value="Expedia">Expedia</option>
                    <option value="Booking.com">Booking.com</option>
                    <option value="Hotel Direct">Hotel Direct</option>`;
                break;
            case 'Car Hire & Taxi':
                htmlContent += `
                    <option value="Avis">Avis</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Europcar">Europcar</option>
                    <option value="Hertz">Hertz</option>
                    <option value="Sixt">Sixt</option>
                    <option value="Blacklane">Blacklane</option>
                    <option value="Transferz">Transferz</option>
                    <option value="Jyrney">Jyrney</option>
                    <option value="Other">Other</option>`;
                break;
            case 'Ancillary':
                // Switch to input for Ancillary as there's no predefined list
                htmlContent = `<div><label for="ancillarySupplier">Name of Supplier:</label>
                                <input type="text" id="ancillarySupplier" placeholder="Name of Supplier" required></div>`;
                break;
        }
        htmlContent += `</select></div>`;
        supplierFields.innerHTML = htmlContent; // Insert into general 'Supplier' container only if not Ancillary
    }
});

