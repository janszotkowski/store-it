'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email()
});

type AuthFormProps = {
    type: 'sign-in' | 'sign-up';
};

export const AuthForm: React.FC<AuthFormProps> = (props: AuthFormProps): React.ReactElement => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: ''
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>): void => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    };

    return (
        <Form {...form}>
            <h1 className={'h1 mb-12 mx-auto w-max'}>
                StoreIt
            </h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-8'}>
                {
                    props.type == 'sign-up' &&
                    <FormField
                        control={form.control}
                        name={'username'}
                        render={({field}) => (
                            <FormItem>
                                <div className={'!shad-form-item'}>
                                    <FormLabel className={'!shad-form-label'}>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            className={'!shad-input'}
                                            placeholder={'Enter your username'}
                                            {...field}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage className={'!shad-form-message'}/>
                            </FormItem>
                        )}
                    />
                }

                <FormField
                    control={form.control}
                    name={'email'}
                    render={({field}) => (
                        <FormItem>
                            <div className={'!shad-form-item'}>
                                <FormLabel className={'!shad-form-label'}>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className={'!shad-input'}
                                        placeholder={'Enter your email'}
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                            <FormMessage className={'!shad-form-message'}/>
                        </FormItem>
                    )}
                />

                <Button
                    type={'submit'}
                    className={'rounded-4xl p-6 w-full cursor-pointer transition-all'}
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
};
