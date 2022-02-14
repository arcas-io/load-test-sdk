import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';
import { ProtoGrpcType } from '../proto_ts/scheduler'
import { SchedulerClient } from '../proto_ts/scheduler/Scheduler'
import * as path from 'path'

type ScheduleRequest = {
    company_id: string;
    user_id: string;
    session_id: string;
    providers: Array<ProviderRequest>
}

type ProviderRequest = {
    provider: string;
    regions: Array<{ region: string; num_servers: string }>
}

export class Scheduler {
    private readonly client: SchedulerClient;

    constructor(server: string, proto_path: string) {
        const protofile = path.resolve(__dirname + './../') + proto_path;
        const packagedef = protoLoader.loadSync(protofile, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        });

        const proto = grpc.loadPackageDefinition(packagedef) as unknown as ProtoGrpcType;
        this.client = new proto.scheduler.Scheduler(server, grpc.credentials.createInsecure());
    }

    public async schedule(request: ScheduleRequest): Promise<Array<string>> {
        const result = await promisify(this.client.schedule).bind(this.client)(request);
        const endpoints: string[] = [];
        result.providers.forEach(provider => {
            provider.regions.forEach(region => {
                region.endpoints.forEach((ep) => {
                    endpoints.push(ep.host);
                });
            });
        });
        return endpoints
    }
}