/// <reference types="react" />
import * as React from 'react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CardActionTypes, DirectLineOptions, IBotConnection, User } from 'botframework-directlinejs';
import { SpeechOptions } from './SpeechOptions';
import { ActivityOrID, FormatOptions } from './Types';
export interface ChatProps {
    adaptiveCardsHostConfig: any;
    bot: User;
    botConnection?: IBotConnection;
    chatTitle?: boolean | string;
    directLine?: DirectLineOptions;
    disabled?: boolean;
    formatOptions?: FormatOptions;
    locale?: string;
    resize?: 'none' | 'window' | 'detect';
    selectedActivity?: BehaviorSubject<ActivityOrID>;
    sendTyping?: boolean;
    showUploadButton?: boolean;
    speechOptions?: SpeechOptions;
    user: User;
}
export declare class Chat extends React.Component<ChatProps, {}> {
    private store;
    private botConnection;
    private activitySubscription;
    private connectionStatusSubscription;
    private selectedActivitySubscription;
    private shellRef;
    private historyRef;
    private chatviewPanelRef;
    private resizeListener;
    private _handleDragOver;
    private _handleOnDrop;
    private _handleCardAction;
    private _handleKeyDownCapture;
    private _saveChatviewPanelRef;
    private _saveHistoryRef;
    private _saveShellRef;
    constructor(props: ChatProps);
    private handleIncomingActivity(activity);
    private setSize();
    private handleCardAction();
    private handleKeyDownCapture(evt);
    private saveChatviewPanelRef(chatviewPanelRef);
    private saveHistoryRef(historyWrapper);
    private saveShellRef(shellWrapper);
    onDragOver(e: Event): void;
    onDrop(ev: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: ChatProps): void;
    render(): JSX.Element;
}
export declare type IDoCardAction = (type: CardActionTypes, value: string | object) => void;
export declare const doCardAction: (botConnection: IBotConnection, from: User, locale: string, sendMessage: (value: string, user: User, locale: string) => void) => IDoCardAction;
export declare const sendPostBack: (botConnection: IBotConnection, text: string, value: object, from: User, locale: string) => void;
export declare const renderIfNonempty: (value: any, renderer: (value: any) => JSX.Element) => JSX.Element;
export declare const classList: (...args: (string | boolean)[]) => string;
