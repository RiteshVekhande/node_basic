import Cryptr from"cryptr";

const cryptobj = new Cryptr('12345');

const text='52790a449a11e9612dd0e3e1f62323e1456b991f679eee1702d9f4b7eacec5337e070f216897cebfbe0dd4566a61d32bf33f13e0f831585abafe49fc0dc47af8382928f15042915384351ff0a41b6c0f5368ae03d562be3d8ae713d85d6080916610fb4a52';

console.log(cryptobj.encrypt(text));

