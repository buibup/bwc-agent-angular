import { environment } from './../../../environments/environment';
import { AgentVM } from './../models/agent-vm.model';
import { Agent } from './../models/agent.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAgents() {
    return this.http.get<AgentVM[]>(`${this.baseUrl}/api/Agents/GetAgents`);
  }

  getAgentById(id: number) {
    return this.http.get<Agent>(`${this.baseUrl}/${id}`);
  }

  createAgent(agent: Agent) {
    return this.http.post(this.baseUrl, agent);
  }

  updateAgent(agent: Agent) {
    return this.http.put(this.baseUrl + '/' + agent.agentId, agent);
  }

  deleteAgent(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
