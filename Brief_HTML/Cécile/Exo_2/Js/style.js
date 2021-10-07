import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Change Brand Font
  'navbar-brand': {
    'fontFamily': 'Tahoma',
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'fontWeight': 'bold'
  },
  // Change Navigation Color
  'navbar #myMenu custom-nav nav-item a': {
    'color': '#fff'
  },
  'navbar #myMenu custom-nav nav-item a:hover': {
    'color': '#F0AAB1'
  },
  // Make Header Image Responsive
  'back-image': {
    'backgroundSize': 'cover',
    'backgroundPosition': 'center center',
    'backgroundRepeat': 'no-repeat',
    'minHeight': [{ 'unit': 'vh', 'value': 70 }],
    'borderRadius': '0px',
    'marginTop': [{ 'unit': 'px', 'value': 74 }]
  },
  // Header Image Sub-Title
  'st': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  // Change Footer Social Icon Color
  'a': {
    'color': '#DC3545'
  },
  'a:hover': {
    'color': '#E994A2'
  }
});

$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});
