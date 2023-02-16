export interface IInterfaceRocket {
        rocket_name: string;
        first_stage: {
            cores: [
                {
                    flight: number;
                    core: {
                        reuse_count: number;
                        status: null;
                    };
                }
            ];
        };
        second_stage: {
            payloads: [
                {
                    payload_type: string;
                    payload_mass_kg: number;
                    payload_mass_lbs: number;
                }
            ];
        };
}
