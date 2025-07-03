import { DataSource } from "typeorm";
import { User } from "../models/User";
import { Agent } from "../models/Agent";
import { BillingCards } from "../models/BillingCards";
import { PaymentMethods } from "../models/PaymentMethods";
import { TeamMembers } from "../models/TeamMembers";
import { PlaygroundSessions } from "../models/PlaygroundSessions";
import { TrainingLogs } from "../models/TrainingLogs";
import { RetrievalJobs } from "../models/RetrievalJobs";
import { Subscriptions } from "../models/Subscriptions";
import { TextContents } from "../models/TextContents";
import { AgentSecuritySettings } from "../models/AgentSecuritySettings";
import { Embeddings } from "../models/Embeddings";
import { CleanedContents } from "../models/CleanedContents";
import { Chunks } from "../models/Chunks";
import { Messages } from "../models/Messages";
import { Sources } from "../models/Sources";
import { ChatLogs } from "../models/ChatLogs";
import { WorkSpaces } from "../models/WorkSpaces";
import { Invoices } from "../models/Invoices";
import { Roles } from "../models/Roles";
import { Billings } from "../models/Billings";
import { Analytics } from "../models/Analytics";
import { AgentUiSettings } from "../models/AgentUiSettings";
import { DataSources } from "../models/DataSources";
import { TeamPlans } from "../models/TeamPlans";
import { Plans } from "../models/Plans";
import { UserPlans } from "../models/UserPlans";
import { Conversation } from "../models/Conversation";
import { WorkSpaceMembers } from "../models/WorkSpaceMembers";
import { Sessions } from "../models/Sessions";
import { Members } from "../models/Members";
import { Teams } from "../models/Teams";
import { PlaygroundMessages } from "../models/PlaygroundMessages";
import { AgentSettings } from "../models/AgentSettings";
import { BillingHistory } from "../models/BillingHistory";
import { ConversationInterface } from "../models/ConversationInterface";
import { AuthToken } from "../models/AuthToken";
import { OTP } from "../models/OTP";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DATABASE || "chatbase",
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  logging: process.env.DB_LOGGING === "true",
  entities: [
    User,
    Agent,
    BillingCards,
    PaymentMethods,
    TeamMembers,
    PlaygroundSessions,
    TrainingLogs,
    RetrievalJobs,
    Subscriptions,
    TextContents,
    AgentSecuritySettings,
    Embeddings,
    CleanedContents,
    Chunks,
    Messages,
    Sources,
    ChatLogs,
    WorkSpaces,
    Invoices,
    Roles,
    Billings,
    Analytics,
    AgentUiSettings,
    DataSources,
    TeamPlans,
    Plans,
    UserPlans,
    Conversation,
    WorkSpaceMembers,
    Sessions,
    Members,
    Teams,
    PlaygroundMessages,
    AgentSettings,
    BillingHistory,
    ConversationInterface,
    AuthToken,
    OTP,
  ],
  subscribers: [],
  migrations: ["migrations/*.ts"],
  migrationsTableName: "migrations",
});
