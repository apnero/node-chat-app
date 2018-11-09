var socket = io();

socket.on('connect', function() {

  socket.emit('createMessage', {
    from: 'joe@abc.coo',
    text: 'what up'
  });
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

socket.on('disconnect', function ()  {
  console.log('Disconnected from server');
});
