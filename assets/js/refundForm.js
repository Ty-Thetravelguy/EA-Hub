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
var bookingSystem;
var processedAutomatically;
var airSupplier;
var airSupplierRef;
var airTicketNo;
var localCurrenyRefundAmount;
var refundAmountGBP;
var refundBackToClientYes = Yes;
var refundBackToClientNo = No;
var markUpBackToClient;
var airNeedToKnow;

document.getElementById('flightRefundType').addEventListener('change', function () {
    const reasonForVoidAirDiv = document.getElementById('reasonForVoidAirDiv');
    const reasonForRefundAirDiv = document.getElementById('reasonForRefundAirDiv');
    const flightNDCDiv = document.getElementById('flightNDCDiv');
    const bookingSystemDiv = document.getElementById('bookingSystemDiv');
    const processedAutomaticallyDiv = document.getElementById('processedAutomaticallyDiv');
    const airSupplierDiv = document.getElementById('airSupplierDiv');

    reasonForVoidAirDiv.style.display = 'none';
    reasonForRefundAirDiv.style.display = 'none';
    flightNDCDiv.style.display = 'none';
    bookingSystemDiv.style.display = 'none';
    processedAutomaticallyDiv.style.display = 'none';
    airSupplierDiv.style.display = 'none';

    if (this.value === 'Void') {
        reasonForVoidAirDiv.style.display = 'block';
    } else if (this.value === 'Full' || this.value === 'Partial' || this.value === 'Tax only') {
        reasonForRefundAirDiv.style.display = 'block';
    }
});

document.getElementById('reasonForVoidAir').addEventListener('change', function () {
    const flightNDCDiv = document.getElementById('flightNDCDiv');
    flightNDCDiv.style.display = this.value !== '' ? 'block' : 'none';
});

document.getElementById('reasonForRefundAir').addEventListener('change', function () {
    const flightNDCDiv = document.getElementById('flightNDCDiv');
    flightNDCDiv.style.display = this.value !== '' ? 'block' : 'none';
});

document.getElementById('flightNDC').addEventListener('change', function () {
    const bookingSystemDiv = document.getElementById('bookingSystemDiv');
    const processedAutomaticallyDiv = document.getElementById('processedAutomaticallyDiv');
    const airSupplierDiv = document.getElementById('airSupplierDiv');

    bookingSystemDiv.style.display = 'none';
    processedAutomaticallyDiv.style.display = 'none';
    airSupplierDiv.style.display = 'none';

    if (this.value === 'Yes') {
        bookingSystemDiv.style.display = 'block';
        processedAutomaticallyDiv.style.display = 'block';
    } else if (this.value === 'No') {
        airSupplierDiv.style.display = 'block';
    }
});

function airRefundData() {
    document.getElementById('airRefundDataDiv')
    airRefundData
};

