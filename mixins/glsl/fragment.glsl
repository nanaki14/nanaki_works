precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform sampler2D texture;


float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

vec3 render(vec2 p) {
  vec4 t = texture2D(texture, p);
  vec3 c = vec3(0.0);

  c += vec3(t.r, t.g, t.b);

  return c;
}

void main(void) {
  vec2 uv = gl_FragCoord.xy / resolution;

  vec4 c = vec4(render(uv), 1.0);

  gl_FragColor = c;
}
