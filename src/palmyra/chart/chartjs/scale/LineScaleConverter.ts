import TimeScaleConverter from "./base/TimeScaleConverter";

const NoopScaleConverterFactory = () => {
    return (d) => {
        return d;
    }
}

const converters = {
    "Time": TimeScaleConverter,
    "Noop": NoopScaleConverterFactory
}

export default converters;