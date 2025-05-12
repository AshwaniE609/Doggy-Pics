import { GSDataSource, GSContext, GSStatus, PlainObject } from '@godspeedsystems/core';
import axios from 'axios';

export default class RestDataSource extends GSDataSource {
  async initClient(): Promise<any> {
    return axios.create({
      baseURL: this.config.base_url,
      headers: this.config.headers || {},
    });
  }

  async execute(ctx: GSContext, args: PlainObject): Promise<GSStatus> {
    try {
      const method = args.meta?.method || 'get';
      const url = args.meta?.url;
      const data = args.body || {};

      const response = await this.client.request({
        method,
        url,
        data: method === 'get' ? undefined : data,
      });
      

      return new GSStatus(true, 200, 'Request successful', response.data);
    } catch (err: any) {
      return new GSStatus(false, err.response?.status || 500, 'Request failed', {
        error: err.message,
      });
    }
  }
}

const SourceType = 'DS';
const Type = 'rest';
const CONFIG_FILE_NAME = 'rest'; // optional
const DEFAULT_CONFIG = {
  base_url: '',
  headers: {},
};

export {
  RestDataSource as DataSource,
  SourceType,
  Type,
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG,
};

