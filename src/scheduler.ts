import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';
import { ProtoGrpcType } from '../proto_ts/scheduler'
import { SchedulerClient } from '../proto_ts/scheduler/Scheduler'
import { ScheduleReply } from '../proto_ts/scheduler/ScheduleReply';
import { ScheduleRequest } from '../proto_ts/scheduler/ScheduleRequest';
import * as path from 'path'

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
        const schedule = promisify(this.client.schedule).bind(this.client);
        const result: ScheduleReply = await schedule(request);
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