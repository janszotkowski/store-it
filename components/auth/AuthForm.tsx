'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

type FormType = 'sign-in' | 'sign-up';

type AuthFormProps = {
    type: FormType;
};

const authFormSchema = (formType: FormType) => {
    return z.object({
        email: z.string().email(),
        userName: formType === 'sign-up' ? z.string().min(2).max(50) : z.string().optional()
    });
};

export const AuthForm: React.FC<AuthFormProps> = (props: AuthFormProps): React.ReactElement => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

    React.useEffect(() => {
        setErrorMessage(undefined);
    }, []);

    const formSchema = authFormSchema(props.type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: '',
            email: ''
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>): void => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        setIsLoading(true);
    };

    return (
        <Form {...form}>
            <h1 className={'h1 mb-12 mx-auto w-max'}>
                {props.type === 'sign-in' ? 'Sign in' : 'Sign up'}
            </h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-8'}>
                {
                    props.type == 'sign-up' &&
                    <FormField
                        control={form.control}
                        name={'userName'}
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
                    disabled={isLoading}
                >
                    Submit
                </Button>

                {
                    errorMessage &&
                    <p className={'error-message'}>* {errorMessage}</p>
                }

                <div className={'flex justify-center'}>
                    <p>
                        {props.type === 'sign-in' ? 'Don\'t have an account ?' : 'Already have an account ?'}
                    </p>
                    <Link
                        className={'ml-1 font-medium text-blue-60 hover:text-blue-80'}
                        href={props.type === 'sign-in' ? '/sign-up' : '/sign-in'}
                    >
                        {props.type === 'sign-in' ? 'Sign up' : 'Sign in'}
                    </Link>
                </div>
            </form>
        </Form>
    );
};
