export default {
  id: 1,
  name: 'Mindy Mentor',
  email: 'mindy.mentor@gmail.com',
  phone: '+49 123 456789',
  expertise: ['React.js', 'Ember.js'],
  interests: ['Angular.js', 'CSS Animations'],
  bio: 'Lorem Ipsum',
  photo: 'http://oi65.tinypic.com/11w8umw.jpg',
  profession: 'Web Developer',
  linkedIn: null,
  schedule: {
    availability: [
      {
        day: 2,
        start: '5:00',
        end: '6:00',
        type: 'phone'
      },
      {
        day: 5,
        start: '6:00',
        end: '8:00',
        type: 'coffee'
      },
    ],
    disabledDates: [],
    timeslotLength: 30
  }
}