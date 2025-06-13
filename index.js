let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00,
}
//Logs attendee name
function logAttendeeName(attendee){
  console.log(attendee.name);
}

//Logs ticket price
function logTicketPrice(attendee){
  console.log(attendee.ticketPrice);
}

//Updates ticket type 
function updateTicketType(attendee, newTicketType){
  attendee.ticketType = newTicketType;
}

//Updates ticket price 
function updateTicketPrice(attendee, newTicketPrice){
  attendee.ticketPrice = newTicketPrice;
}

//Removes the event property
function removeEventProperty(attendee){
  delete attendee.event;
}

//Adds a new property called checkedIn which should be true
function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};