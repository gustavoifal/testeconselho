/** Lista fechada de operações que a interface pode pedir ao processo principal. */
export const CHANNELS = [
  'app:bootstrap', 'pref:setUserName',
  'auth:status', 'auth:setPassword', 'auth:unlock', 'auth:lock',
  'service:list', 'service:create',
  'inst:get', 'inst:update', 'inst:pickLogo', 'inst:removeLogo',
  'tpl:list', 'tpl:update', 'rule:get', 'rule:update', 'num:setNext', 'num:sequence', 'num:peek',
  'signer:list', 'signer:selectable', 'signer:create', 'signer:update', 'signer:setActive', 'signer:setHidden',
  'signer:setTemplates', 'signer:pickImage', 'signer:removeImage',
  'doc:previewHtml', 'doc:saveDraft', 'doc:deleteDraft', 'doc:issue', 'doc:cancel', 'doc:get', 'doc:search', 'doc:stats',
  'doc:renderHtml', 'doc:export', 'doc:suggestName', 'doc:showFile', 'dialog:chooseExportDir',
  'backup:create', 'backup:restore', 'audit:list',
] as const;
export type Channel = (typeof CHANNELS)[number];
export type Reply<T = any> = { ok: true; data: T } | { ok: false; error: { code: string; message: string; fields?: { field: string; message: string }[] } };
