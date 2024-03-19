function scuberGreetingForFeet(){
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    it('charges 20 dollars for a distance between 400 and 2000 feet', function () {
      expect(scuberGreetingForFeet(1500)).to.equal('That will be twenty bucks.');
    });

    it('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    });

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });
};


function ternaryCheckCity(){
 if (city === 'NYC') {
   return 'Ok, sounds good.';
 } else {
   return 'No go.';
 }
}

function switchOnCharmFromTip(){
  if (tip === 'generous') {
    return 'Thank you so much.';
  } else if (tip === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}