import { engine } from "@if-framework/framework/choice";

// Interface for type safety of the engine's global variables.
export interface Globals {
    example: boolean;
};

// Simple function to initialize the globals and cast them to the Globals interface.
export function globals() {
    let g = engine.globals as Globals;
    g.example ??= true;
    return g;
}

