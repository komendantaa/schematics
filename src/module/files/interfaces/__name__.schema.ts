import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommonSchema, CommonSchemaOptions } from '@interfaces';
import { I<%=Name%> } from './<%=name%>.interface';
import { CollectionName } from '@const';

@Schema({
  ...CommonSchemaOptions,
  collection: CollectionName.<%=NAMES%>,
})
export class <%=Name%>Model extends CommonSchema implements I<%=Name%> {
  @Prop({ type: String })
  title: string;
}

export const <%=Name%>Schema = SchemaFactory.createForClass(<%=Name%>Model);
