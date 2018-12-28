const toKebab = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]/g, '-')
    .toLowerCase();
};

const mcnPrefixes = ['has', 'is'];
const mcnPrefixable = [
  'active',
  'checked',
  'closed',
  'collapsed',
  'deleted',
  'deselected',
  'disabled',
  'enabled',
  'expanded',
  'flipped',
  'first',
  'hidden',
  'inactive',
  'last',
  'new',
  'open',
  'selected',
  'visible',
  'zoomed',
];
const mcnJoinable = [
  'color',
  'size',
  'type',
]

const processClasses = (classes, propName, propValue) => {
  if (!!propValue && typeof propValue !== 'function') {
    const className = toKebab(propName);
    if(mcnPrefixes.includes(className.split('-')[0])) {
      classes.push(className);
    } else if (mcnPrefixable.includes(className)) {
      classes.push(`is-${className}`);
    } else if (mcnJoinable.includes(className)) {
      classes.push(`is-${toKebab(propValue)}`);
    }
  }
};

const modifierClassnames = (props) => {
  const classes = [];
  for (let i in props) {
    processClasses(classes, i, props[i]);
  }
  return classes.join(' ');
};

export default modifierClassnames;
