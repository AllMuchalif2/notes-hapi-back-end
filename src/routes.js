const { addNotesHandler, getAllNotesHandler, getNoteByidHandler, editNoteByIdHandle, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler:getNoteByidHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler:editNoteByIdHandle,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler:deleteNoteByIdHandler,
  },
];

module.exports = routes;
